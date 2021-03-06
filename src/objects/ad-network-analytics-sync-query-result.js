/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * AdNetworkAnalyticsSyncQueryResult
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdNetworkAnalyticsSyncQueryResult extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      query_id: 'query_id',
      results: 'results',
      id: 'id'
    });
  }
}
