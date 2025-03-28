import { Stage } from "./stage.builder";

interface Scheduler {
	code: string;
	owner: string;
	timeoutMinutes: number;
	priority: 1 | 2 | 3 | 4 | 5 | 6;
	runVersion: `v${number}`;
	execPath: string;
	body: ScheduerBody;
}

interface ScheduerBody {
	start: string;
	version: `v${number}`;
	maxIterations: number;
	stages: Stage<object, object>[];
	data: Record<string, unknown>;
}

export class SchedulerBuilder {
	readonly #stages = [] as Stage<object, object>[];
	readonly #schedulerBody = {} as ScheduerBody;
	readonly #scheduler = {} as Scheduler;

	constructor(schedulerName: string) {
		this.#scheduler.code = this.#generateCode(schedulerName);
		this.#scheduler.owner = `${schedulerName}_queue`;
		this.#scheduler.timeoutMinutes = 10;
		this.#scheduler.priority = 6;
		this.#scheduler.runVersion = "v2";
		this.#scheduler.execPath =
			"./../scripts/parametrizedBots/pb.controller.js";
		this.#schedulerBody.version = "v3";
		this.#schedulerBody.maxIterations = 20;
	}

	addStage(stage: Stage<object, object>): this {
		this.#stages.push(stage);
		return this;
	}

	setCode(code: string): this {
		this.#scheduler.code = code;
		return this;
	}

	setOwner(owner: string): this {
		this.#scheduler.owner = owner;
		return this;
	}

	setPriority(priority: Scheduler["priority"]): this {
		this.#scheduler.priority = priority;
		return this;
	}

	setRunVersion(version: Scheduler["runVersion"]): this {
		this.#scheduler.runVersion = version;
		return this;
	}

	setExecPath(execPath: string): this {
		this.#scheduler.execPath = execPath;
		return this;
	}

	setStartStage(key: string): this {
		this.#schedulerBody.start = key;
		return this;
	}

	setBodyVersion(version: ScheduerBody["version"]): this {
		this.#schedulerBody.version = version;
		return this;
	}

	setMaxIterations(maxIterations: number): this {
		this.#schedulerBody.maxIterations = maxIterations;
		return this;
	}

	setData(data: Record<string, unknown>): this {
		this.#schedulerBody.data = data;
		return this;
	}

	build(): Scheduler {
		this.#validate();
		const body = {
			...this.#schedulerBody,
			stages: this.#stages
		};
		const scheduler = {
			...this.#scheduler,
			body
		};
		return structuredClone(scheduler);
	}

	#generateCode(code: string) {
		const timestamp = new Date().getTime();
		return `${code}_${timestamp}`;
	}

	#validate() {
		const errors = [];
		if (!this.#schedulerBody.start)
			errors.push("Please set an start stage");
		if (!this.#stages.length) errors.push("Please set an stage");
		if (errors.length) throw new Error(errors.join("\n"));
	}
}
