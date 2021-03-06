const { task } = require("hardhat/config")

const { ethers: { constants: { MaxUint256 } } } = require("ethers")

task("accounts", "Prints the list of accounts", require("./accounts"))
task("gas-price", "Prints gas price").setAction(async function ({ address }, { ethers }) {
    console.log("Gas price", (await ethers.provider.getGasPrice()).toString())
})

task("bytecode", "Prints bytecode").setAction(async function ({ address }, { ethers }) {
    console.log("Bytecode", await ethers.provider.getCode(address))
})

task("feeder:feed", "Feed")
    .setAction(async function ({ feedDev }, { getNamedAccounts, ethers: { BigNumber }, getChainId }) {
        const { deployer, dev } = await getNamedAccounts()

        const feeder = new ethers.Wallet(process.env.FEEDER_PRIVATE_KEY, ethers.provider)

        await (await feeder.sendTransaction({
            to: deployer,
            value: BigNumber.from(1).mul(BigNumber.from(10).pow(18))
        })).wait();
    })

task("feeder:return", "Return funds to feeder").setAction(async function ({ address }, { ethers: { getNamedSigners } }) {
    const { deployer, dev } = await getNamedSigners()

    await (await deployer.sendTransaction({
        to: process.env.FEEDER_PUBLIC_KEY,
        value: await deployer.getBalance()
    })).wait();

    await (await dev.sendTransaction({
        to: process.env.FEEDER_PUBLIC_KEY,
        value: await dev.getBalance()
    })).wait();
})

task("erc20:approve", "ERC20 approve")
    .addParam("token", "Token")
    .addParam("spender", "Spender")
    .addOptionalParam("deadline", MaxUint256)
    .setAction(async function ({ token, spender, deadline }, { ethers: { getNamedSigner } }, runSuper) {
        const erc20 = await ethers.getContractFactory("UniswapV2ERC20")

        const slp = erc20.attach(token)

        await (await slp.connect(await getNamedSigner("dev")).approve(spender, deadline)).wait()
    });

