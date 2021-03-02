#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkDdbAutoscaleStack } from '../lib/cdk-ddb-autoscale-stack';

const app = new cdk.App();
new CdkDdbAutoscaleStack(app, 'CdkDdbAutoscaleStack');
