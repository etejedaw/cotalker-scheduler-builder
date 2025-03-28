import { ZodSchema } from "zod";

export interface Stage<Data extends object, Next = NextStage> {
	key: string;
	name: string;
	version: `${number}.${number}.${number}` | null;
	variables: unknown[];
	data: Data;
	next: Next;
	customNetworkRequest: unknown[];
}

interface NextStage {
	SUCCESS: string;
	ERROR: string;
}

export abstract class StageBuilder<Data extends object, Next = NextStage> {
	protected readonly stage = {} as Stage<Data, Next>;
	protected readonly data = {} as Data;
	protected readonly next = {} as Next;
	private readonly zodSchema: ZodSchema;

	constructor(
		key: string,
		stageName: string,
		stageVersion: `${number}.${number}.${number}` | null,
		zodSchema: ZodSchema
	) {
		this.stage.key = key;
		this.stage.name = stageName;
		this.stage.version = stageVersion;
		this.stage.variables = [];
		this.stage.customNetworkRequest = [];
		this.zodSchema = zodSchema;
	}

	addVariables(variable: string): this {
		this.stage.variables.push(variable);
		return this;
	}

	addCustomNetworkRequest(networkRequest: string): this {
		this.stage.customNetworkRequest.push(networkRequest);
		return this;
	}

	build(): Readonly<Stage<Data, Next>> {
		const data = this.zodSchema.parse(this.data);
		const stage = {
			...this.stage,
			next: this.next,
			data
		};
		return structuredClone(stage);
	}
}
