import { TEST_ENV_OVERRIDES } from "@tma/node-env";

import { DynamoClient } from "../src/dynamo-client";
import { DynamoEntityManager } from "../src/dynamo-entity-manager";

jest.mock("@tma/node-env");

describe(DynamoEntityManager, () => {
  let dynamoClient: DynamoClient;
  let entityManager: DynamoEntityManager;

  beforeEach(() => {
    dynamoClient = {
      query: jest.fn().mockResolvedValue([]),
    } as unknown as DynamoClient;

    TEST_ENV_OVERRIDES["DYNAMODB_TABLE_JEST"] = "jest-table";

    entityManager = new DynamoEntityManager(dynamoClient);
  });

  it("should call dynamo with correct params for empty condition", async () => {
    await entityManager.findCursor("jest");
    expect(dynamoClient.query).toHaveBeenCalledWith({
      TableName: "jest-table",
    });
  });
});
