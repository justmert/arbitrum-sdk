/*
 * Copyright 2021, Offchain Labs, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-env node */
'use strict'

export const NODE_INTERFACE_ADDRESS =
  '0x00000000000000000000000000000000000000C8'

export const ARB_SYS_ADDRESS = '0x0000000000000000000000000000000000000064'

export const ARB_RETRYABLE_TX_ADDRESS =
  '0x000000000000000000000000000000000000006E'

export const ARB_ADDRESS_TABLE_ADDRESS =
  '0x0000000000000000000000000000000000000066'

export const ARB_OWNER_PUBLIC = '0x000000000000000000000000000000000000006B'

export const ARB_GAS_INFO = '0x000000000000000000000000000000000000006C'

export const ARB_STATISTICS = '0x000000000000000000000000000000000000006F'

/**
 * The offset added to an L1 address to get the corresponding L2 address
 */
export const ADDRESS_ALIAS_OFFSET = '0x1111000000000000000000000000000000001111'

/**
 * Address of the gateway a token will be assigned to if it is disabled
 */
export const DISABLED_GATEWAY = '0x0000000000000000000000000000000000000001'

/**
 * If a custom token is enabled for arbitrum it will implement a function called
 * isArbitrumEnabled which returns this value. Intger: 0xa4b1
 */
export const CUSTOM_TOKEN_IS_ENABLED = 42161

export const SEVEN_DAYS_IN_SECONDS = 7 * 24 * 60 * 60
