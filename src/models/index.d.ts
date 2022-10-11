import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type Ex1MetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Ex1 {
  readonly id: string;
  readonly untitledfield?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Ex1, Ex1MetaData>);
  static copyOf(source: Ex1, mutator: (draft: MutableModel<Ex1, Ex1MetaData>) => MutableModel<Ex1, Ex1MetaData> | void): Ex1;
}