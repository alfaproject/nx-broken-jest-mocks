import { getEnvString } from "@tma/node-env";

import { DynamoClient } from "./dynamo-client";

export class DynamoEntityManager {
  constructor(public dynamoClient: DynamoClient) {}

  async findCursor<T>(entityName: string) {
    return this.dynamoClient.query<T>({
      TableName: getEnvString(`DYNAMODB_TABLE_${entityName.toUpperCase()}`),
    });
  }
}
