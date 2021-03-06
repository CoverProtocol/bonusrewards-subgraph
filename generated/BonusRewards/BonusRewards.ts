// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Deposit extends ethereum.Event {
  get params(): Deposit__Params {
    return new Deposit__Params(this);
  }
}

export class Deposit__Params {
  _event: Deposit;

  constructor(event: Deposit) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get lpToken(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Withdraw extends ethereum.Event {
  get params(): Withdraw__Params {
    return new Withdraw__Params(this);
  }
}

export class Withdraw__Params {
  _event: Withdraw;

  constructor(event: Withdraw) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get lpToken(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class BonusRewards__getPoolResultValue0Struct extends ethereum.Tuple {
  get bonuses(): Array<BonusRewards__getPoolResultValue0BonusesStruct> {
    return this[0].toTupleArray<
      BonusRewards__getPoolResultValue0BonusesStruct
    >();
  }

  get lastUpdatedAt(): BigInt {
    return this[1].toBigInt();
  }
}

export class BonusRewards__getPoolResultValue0BonusesStruct extends ethereum.Tuple {
  get bonusTokenAddr(): Address {
    return this[0].toAddress();
  }

  get startTime(): BigInt {
    return this[1].toBigInt();
  }

  get endTime(): BigInt {
    return this[2].toBigInt();
  }

  get weeklyRewards(): BigInt {
    return this[3].toBigInt();
  }

  get accRewardsPerToken(): BigInt {
    return this[4].toBigInt();
  }

  get remBonus(): BigInt {
    return this[5].toBigInt();
  }
}

export class BonusRewards__getUserResultValue0Struct extends ethereum.Tuple {
  get amount(): BigInt {
    return this[0].toBigInt();
  }

  get rewardsWriteoffs(): Array<BigInt> {
    return this[1].toBigIntArray();
  }
}

export class BonusRewards__getUserResult {
  value0: BonusRewards__getUserResultValue0Struct;
  value1: Array<BigInt>;

  constructor(
    value0: BonusRewards__getUserResultValue0Struct,
    value1: Array<BigInt>
  ) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromTuple(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigIntArray(this.value1));
    return map;
  }
}

export class BonusRewards extends ethereum.SmartContract {
  static bind(address: Address): BonusRewards {
    return new BonusRewards("BonusRewards", address);
  }

  getAuthorizers(_lpToken: Address, _bonusTokenAddr: Address): Array<Address> {
    let result = super.call(
      "getAuthorizers",
      "getAuthorizers(address,address):(address[])",
      [
        ethereum.Value.fromAddress(_lpToken),
        ethereum.Value.fromAddress(_bonusTokenAddr)
      ]
    );

    return result[0].toAddressArray();
  }

  try_getAuthorizers(
    _lpToken: Address,
    _bonusTokenAddr: Address
  ): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getAuthorizers",
      "getAuthorizers(address,address):(address[])",
      [
        ethereum.Value.fromAddress(_lpToken),
        ethereum.Value.fromAddress(_bonusTokenAddr)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  getPool(_lpToken: Address): BonusRewards__getPoolResultValue0Struct {
    let result = super.call(
      "getPool",
      "getPool(address):(((address,uint48,uint48,uint256,uint256,uint256)[],uint256))",
      [ethereum.Value.fromAddress(_lpToken)]
    );

    return result[0].toTuple() as BonusRewards__getPoolResultValue0Struct;
  }

  try_getPool(
    _lpToken: Address
  ): ethereum.CallResult<BonusRewards__getPoolResultValue0Struct> {
    let result = super.tryCall(
      "getPool",
      "getPool(address):(((address,uint48,uint48,uint256,uint256,uint256)[],uint256))",
      [ethereum.Value.fromAddress(_lpToken)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTuple() as BonusRewards__getPoolResultValue0Struct
    );
  }

  getPoolList(): Array<Address> {
    let result = super.call("getPoolList", "getPoolList():(address[])", []);

    return result[0].toAddressArray();
  }

  try_getPoolList(): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall("getPoolList", "getPoolList():(address[])", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  getResponders(): Array<Address> {
    let result = super.call("getResponders", "getResponders():(address[])", []);

    return result[0].toAddressArray();
  }

  try_getResponders(): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getResponders",
      "getResponders():(address[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  getUser(_lpToken: Address, _account: Address): BonusRewards__getUserResult {
    let result = super.call(
      "getUser",
      "getUser(address,address):((uint256,uint256[]),uint256[])",
      [
        ethereum.Value.fromAddress(_lpToken),
        ethereum.Value.fromAddress(_account)
      ]
    );

    return new BonusRewards__getUserResult(
      result[0].toTuple() as BonusRewards__getUserResultValue0Struct,
      result[1].toBigIntArray()
    ) as BonusRewards__getUserResult;
  }

  try_getUser(
    _lpToken: Address,
    _account: Address
  ): ethereum.CallResult<BonusRewards__getUserResult> {
    let result = super.tryCall(
      "getUser",
      "getUser(address,address):((uint256,uint256[]),uint256[])",
      [
        ethereum.Value.fromAddress(_lpToken),
        ethereum.Value.fromAddress(_account)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new BonusRewards__getUserResult(
        value[0].toTuple() as BonusRewards__getUserResultValue0Struct,
        value[1].toBigIntArray()
      ) as BonusRewards__getUserResult
    );
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  paused(): boolean {
    let result = super.call("paused", "paused():(bool)", []);

    return result[0].toBoolean();
  }

  try_paused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("paused", "paused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  viewRewards(_lpToken: Address, _user: Address): Array<BigInt> {
    let result = super.call(
      "viewRewards",
      "viewRewards(address,address):(uint256[])",
      [ethereum.Value.fromAddress(_lpToken), ethereum.Value.fromAddress(_user)]
    );

    return result[0].toBigIntArray();
  }

  try_viewRewards(
    _lpToken: Address,
    _user: Address
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "viewRewards",
      "viewRewards(address,address):(uint256[])",
      [ethereum.Value.fromAddress(_lpToken), ethereum.Value.fromAddress(_user)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }
}

export class AddBonusCall extends ethereum.Call {
  get inputs(): AddBonusCall__Inputs {
    return new AddBonusCall__Inputs(this);
  }

  get outputs(): AddBonusCall__Outputs {
    return new AddBonusCall__Outputs(this);
  }
}

export class AddBonusCall__Inputs {
  _call: AddBonusCall;

  constructor(call: AddBonusCall) {
    this._call = call;
  }

  get _lpToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _bonusTokenAddr(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _startTime(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _weeklyRewards(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _transferAmount(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class AddBonusCall__Outputs {
  _call: AddBonusCall;

  constructor(call: AddBonusCall) {
    this._call = call;
  }
}

export class AddPoolsAndAllowBonusCall extends ethereum.Call {
  get inputs(): AddPoolsAndAllowBonusCall__Inputs {
    return new AddPoolsAndAllowBonusCall__Inputs(this);
  }

  get outputs(): AddPoolsAndAllowBonusCall__Outputs {
    return new AddPoolsAndAllowBonusCall__Outputs(this);
  }
}

export class AddPoolsAndAllowBonusCall__Inputs {
  _call: AddPoolsAndAllowBonusCall;

  constructor(call: AddPoolsAndAllowBonusCall) {
    this._call = call;
  }

  get _lpTokens(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _bonusTokenAddrs(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }

  get _authorizers(): Array<Address> {
    return this._call.inputValues[2].value.toAddressArray();
  }
}

export class AddPoolsAndAllowBonusCall__Outputs {
  _call: AddPoolsAndAllowBonusCall;

  constructor(call: AddPoolsAndAllowBonusCall) {
    this._call = call;
  }
}

export class ClaimRewardsForPoolsCall extends ethereum.Call {
  get inputs(): ClaimRewardsForPoolsCall__Inputs {
    return new ClaimRewardsForPoolsCall__Inputs(this);
  }

  get outputs(): ClaimRewardsForPoolsCall__Outputs {
    return new ClaimRewardsForPoolsCall__Outputs(this);
  }
}

export class ClaimRewardsForPoolsCall__Inputs {
  _call: ClaimRewardsForPoolsCall;

  constructor(call: ClaimRewardsForPoolsCall) {
    this._call = call;
  }

  get _lpTokens(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }
}

export class ClaimRewardsForPoolsCall__Outputs {
  _call: ClaimRewardsForPoolsCall;

  constructor(call: ClaimRewardsForPoolsCall) {
    this._call = call;
  }
}

export class CollectDustCall extends ethereum.Call {
  get inputs(): CollectDustCall__Inputs {
    return new CollectDustCall__Inputs(this);
  }

  get outputs(): CollectDustCall__Outputs {
    return new CollectDustCall__Outputs(this);
  }
}

export class CollectDustCall__Inputs {
  _call: CollectDustCall;

  constructor(call: CollectDustCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _lpToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _poolBonusId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class CollectDustCall__Outputs {
  _call: CollectDustCall;

  constructor(call: CollectDustCall) {
    this._call = call;
  }
}

export class DepositCall extends ethereum.Call {
  get inputs(): DepositCall__Inputs {
    return new DepositCall__Inputs(this);
  }

  get outputs(): DepositCall__Outputs {
    return new DepositCall__Outputs(this);
  }
}

export class DepositCall__Inputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }

  get _lpToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DepositCall__Outputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }
}

export class EmergencyWithdrawCall extends ethereum.Call {
  get inputs(): EmergencyWithdrawCall__Inputs {
    return new EmergencyWithdrawCall__Inputs(this);
  }

  get outputs(): EmergencyWithdrawCall__Outputs {
    return new EmergencyWithdrawCall__Outputs(this);
  }
}

export class EmergencyWithdrawCall__Inputs {
  _call: EmergencyWithdrawCall;

  constructor(call: EmergencyWithdrawCall) {
    this._call = call;
  }

  get _lpTokens(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }
}

export class EmergencyWithdrawCall__Outputs {
  _call: EmergencyWithdrawCall;

  constructor(call: EmergencyWithdrawCall) {
    this._call = call;
  }
}

export class ExtendBonusCall extends ethereum.Call {
  get inputs(): ExtendBonusCall__Inputs {
    return new ExtendBonusCall__Inputs(this);
  }

  get outputs(): ExtendBonusCall__Outputs {
    return new ExtendBonusCall__Outputs(this);
  }
}

export class ExtendBonusCall__Inputs {
  _call: ExtendBonusCall;

  constructor(call: ExtendBonusCall) {
    this._call = call;
  }

  get _lpToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _poolBonusId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _bonusTokenAddr(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _transferAmount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class ExtendBonusCall__Outputs {
  _call: ExtendBonusCall;

  constructor(call: ExtendBonusCall) {
    this._call = call;
  }
}

export class SetPausedCall extends ethereum.Call {
  get inputs(): SetPausedCall__Inputs {
    return new SetPausedCall__Inputs(this);
  }

  get outputs(): SetPausedCall__Outputs {
    return new SetPausedCall__Outputs(this);
  }
}

export class SetPausedCall__Inputs {
  _call: SetPausedCall;

  constructor(call: SetPausedCall) {
    this._call = call;
  }

  get _paused(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class SetPausedCall__Outputs {
  _call: SetPausedCall;

  constructor(call: SetPausedCall) {
    this._call = call;
  }
}

export class SetRespondersCall extends ethereum.Call {
  get inputs(): SetRespondersCall__Inputs {
    return new SetRespondersCall__Inputs(this);
  }

  get outputs(): SetRespondersCall__Outputs {
    return new SetRespondersCall__Outputs(this);
  }
}

export class SetRespondersCall__Inputs {
  _call: SetRespondersCall;

  constructor(call: SetRespondersCall) {
    this._call = call;
  }

  get _responders(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }
}

export class SetRespondersCall__Outputs {
  _call: SetRespondersCall;

  constructor(call: SetRespondersCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UpdateBonusCall extends ethereum.Call {
  get inputs(): UpdateBonusCall__Inputs {
    return new UpdateBonusCall__Inputs(this);
  }

  get outputs(): UpdateBonusCall__Outputs {
    return new UpdateBonusCall__Outputs(this);
  }
}

export class UpdateBonusCall__Inputs {
  _call: UpdateBonusCall;

  constructor(call: UpdateBonusCall) {
    this._call = call;
  }

  get _lpToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _bonusTokenAddr(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _weeklyRewards(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _startTime(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class UpdateBonusCall__Outputs {
  _call: UpdateBonusCall;

  constructor(call: UpdateBonusCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get _lpToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}
