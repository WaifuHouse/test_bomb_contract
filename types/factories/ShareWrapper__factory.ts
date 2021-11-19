/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ShareWrapper, ShareWrapperInterface } from "../ShareWrapper";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "share",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061071a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806318160ddd1461005c5780632e1a7d4d1461007657806370a0823114610095578063a694fc3a146100bb578063a8d5fd65146100d8575b600080fd5b6100646100fc565b60408051918252519081900360200190f35b6100936004803603602081101561008c57600080fd5b5035610102565b005b610064600480360360208110156100ab57600080fd5b50356001600160a01b031661019a565b610093600480360360208110156100d157600080fd5b50356101b5565b6100e061020e565b604080516001600160a01b039092168252519081900360200190f35b60015490565b33600090815260026020526040902054818110156101515760405162461bcd60e51b81526004018080602001828103825260348152602001806106876034913960400191505060405180910390fd5b60015461015e908361021d565b60015561016b818361021d565b336000818152600260205260408120929092559054610196916001600160a01b03909116908461027a565b5050565b6001600160a01b031660009081526002602052604090205490565b6001546101c290826102d1565b600155336000908152600260205260409020546101df90826102d1565b33600081815260026020526040812092909255905461020b916001600160a01b03909116903084610332565b50565b6000546001600160a01b031681565b600082821115610274576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526102cc908490610392565b505050565b60008282018381101561032b576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b17905261038c908590610392565b50505050565b60606103e7826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166104439092919063ffffffff16565b8051909150156102cc5780806020019051602081101561040657600080fd5b50516102cc5760405162461bcd60e51b815260040180806020018281038252602a8152602001806106bb602a913960400191505060405180910390fd5b6060610452848460008561045a565b949350505050565b60608247101561049b5760405162461bcd60e51b81526004018080602001828103825260268152602001806106616026913960400191505060405180910390fd5b6104a4856105b6565b6104f5576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b602083106105345780518252601f199092019160209182019101610515565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114610596576040519150601f19603f3d011682016040523d82523d6000602084013e61059b565b606091505b50915091506105ab8282866105bc565b979650505050505050565b3b151590565b606083156105cb57508161032b565b8251156105db5782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561062557818101518382015260200161060d565b50505050905090810190601f1680156106525780820380516001836020036101000a031916815260200191505b509250505060405180910390fdfe416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c4d61736f6e72793a20776974686472617720726571756573742067726561746572207468616e207374616b656420616d6f756e745361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a2646970667358221220e0d57623b7d696e33b9de103cb0278e2be721bf02376dd3fe7a0bf0a82b459f364736f6c634300060c0033";

type ShareWrapperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ShareWrapperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ShareWrapper__factory extends ContractFactory {
  constructor(...args: ShareWrapperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ShareWrapper> {
    return super.deploy(overrides || {}) as Promise<ShareWrapper>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ShareWrapper {
    return super.attach(address) as ShareWrapper;
  }
  connect(signer: Signer): ShareWrapper__factory {
    return super.connect(signer) as ShareWrapper__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ShareWrapperInterface {
    return new utils.Interface(_abi) as ShareWrapperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ShareWrapper {
    return new Contract(address, _abi, signerOrProvider) as ShareWrapper;
  }
}