import { BigInt } from "@graphprotocol/graph-ts"
import {
  BonusRewards,
  Deposit,
  OwnershipTransferred,
  Withdraw
} from "../generated/BonusRewards/BonusRewards"
import { BalanceEntity } from "../generated/schema"

export function handleDeposit(event: Deposit): void {
  let entityKey = event.transaction.from.toHex() + "-" + event.params.lpToken.toHex()
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = BalanceEntity.load(entityKey)

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new BalanceEntity(entityKey)

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + event.params.amount

  // Entity fields can be set based on event parameters
  entity.user = event.params.user
  entity.lpToken = event.params.lpToken

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.getAuthorizers(...)
  // - contract.getPool(...)
  // - contract.getPoolList(...)
  // - contract.getResponders(...)
  // - contract.getUser(...)
  // - contract.owner(...)
  // - contract.paused(...)
  // - contract.viewRewards(...)
}

export function handleWithdraw(event: Withdraw): void {
  let entityKey = event.transaction.from.toHex() + "-" + event.params.lpToken.toHex()
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = BalanceEntity.load(entityKey)

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new BalanceEntity(entityKey)

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count - event.params.amount

  // Entity fields can be set based on event parameters
  entity.user = event.params.user
  entity.lpToken = event.params.lpToken

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.getAuthorizers(...)
  // - contract.getPool(...)
  // - contract.getPoolList(...)
  // - contract.getResponders(...)
  // - contract.getUser(...)
  // - contract.owner(...)
  // - contract.paused(...)
  // - contract.viewRewards(...)
}
