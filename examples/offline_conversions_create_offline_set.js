/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

 'use strict';
const bizSdk = require('facebook-nodejs-business-sdk');
const Business = bizSdk.Business;
const OfflineConversionDataSet = bizSdk.OfflineConversionDataSet;

const access_token = '<ACCESS_TOKEN>';
const app_secret = '<APP_SECRET>';
const app_id = '<APP_ID>';
const id = '<ID>';
const api = bizSdk.FacebookAdsApi.init(access_token);
const showDebugingInfo = true; // Setting this to true shows more debugging info.
if (showDebugingInfo) {
  api.setDebug(true);
}

const logApiCallResult = (apiCallName, data) => {
  console.log(apiCallName);
  if (showDebugingInfo) {
    console.log('Data:' + JSON.stringify(data));
  }
};

let fields, params;
fields = [
];
params = {
  'name' : 'offline_event_set',
  'description' : 'conversion data used for superbowl campaign',
  'data_origin' : 'DIRECTLY_FROM_PEOPLE',
};
const offline_conversion_data_sets = (new Business(id)).createOfflineConversionDataSet(
  fields,
  params
);
logApiCallResult('offline_conversion_data_sets api call complete.', offline_conversion_data_sets);