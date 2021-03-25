import * as cdk from '@aws-cdk/core';

import * as dynamodb from '@aws-cdk/aws-dynamodb';

import * as applicationautoscaling from '@aws-cdk/aws-applicationautoscaling';

export class CdkDdbAutoscaleStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // The code that defines your stack goes here

        const table = new dynamodb.Table(this, "ddbTable", {
            "tableName": 'table-name',
            "partitionKey": { "name": 'field1', "type": dynamodb.AttributeType.STRING },
            "sortKey": { "name": 'field2', "type": dynamodb.AttributeType.STRING },
            "billingMode": dynamodb.BillingMode.PROVISIONED,
        });
        
        const cfnTable = table.node.defaultChild as dynamodb.CfnTable;
        cfnTable.addOverride('DeletionPolicy', 'Delete');
        
        
        /*
        
        const readAutoScalingOptions = table.autoScaleReadCapacity({
            minCapacity: 5,
            maxCapacity: 200
        });
        readAutoScalingOptions.scaleOnUtilization({ targetUtilizationPercent: 70 });
        
        
        const writeAutoScalingOptions = table.autoScaleWriteCapacity({
            minCapacity: 5,
            maxCapacity: 200
        });
        writeAutoScalingOptions.scaleOnUtilization({ targetUtilizationPercent: 70 });
        
        console.log(table.node.children.toString());
        
        */
        
        /*
        table.node.children.forEach (child => {
          const cfnResource = child.node.children as cdk.CfnResource;
          if (cfnResource.cfnResourceType === "AWS::ApplicationAutoScaling::ScalableTarget") {
            console.log("!");
            cfnResource.addOverride('UpdateReplacePolicy', 'Retain');
            cfnResource.addOverride('DeletionPolicy', 'Retain');
          }
        });
        
        */
        
    }
}
