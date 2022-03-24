import { Stack, StackProps, Duration } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as rds from "aws-cdk-lib/aws-rds";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as lambda from "aws-cdk-lib/aws-lambda";

// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkBacklocalStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const backLocalCluster = new rds.ServerlessCluster(this, "BackLocalCluster", {
      engine: rds.DatabaseClusterEngine.AURORA_MYSQL,
      scaling: {
        autoPause: Duration.hours(20),
        minCapacity: rds.AuroraCapacityUnit.ACU_8,
        maxCapacity: rds.AuroraCapacityUnit.ACU_32,
      },
      defaultDatabaseName: "backLocal",
      enableDataApi: true
    });

    const pythonLambda = new lambda.Function(this, 'pythonLambda', {
      code: lambda.Code.fromAsset("../lambdas"),
      handler: 'handler.handler',
      runtime: lambda.Runtime.PYTHON_3_6,
    });

    const api = new apigateway.LambdaRestApi(this, "LambdaProxyApi", {
      handler: pythonLambda,
      proxy: false,
    });
  }
}
