import { Stack, StackProps, Duration } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as rds from "aws-cdk-lib/aws-rds";
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
  }
}
