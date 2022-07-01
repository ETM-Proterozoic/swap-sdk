import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,
  BSC = 56,
  ETMP = 36,
  ETMPTest = 37
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const getFactoryAddress = (chainId: number) => {
  switch (chainId){
    case ChainId.ETMPTest:
      return {
        address: '0x4bFb5B69833b6FB801A13C510C7cfca50bd584e1',
        initCodeHash: '0x0c8000da87ec1e34d37962e9e58b649069b3b0548b00836ec9a8147d22dde153'
      }
    case ChainId.ETMP:
      return {
        address: '0x890883022737CF17636fbE2f6B093Fff6c82135f',
        initCodeHash: '0x0c8000da87ec1e34d37962e9e58b649069b3b0548b00836ec9a8147d22dde153'
      }
    default:
      return {
        address: '0x890883022737CF17636fbE2f6B093Fff6c82135f',
        initCodeHash: '0x0c8000da87ec1e34d37962e9e58b649069b3b0548b00836ec9a8147d22dde153'
      }
  }
}

export const FACTORY_ADDRESS = '0x890883022737CF17636fbE2f6B093Fff6c82135f'

export const INIT_CODE_HASH = '0x0c8000da87ec1e34d37962e9e58b649069b3b0548b00836ec9a8147d22dde153'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
