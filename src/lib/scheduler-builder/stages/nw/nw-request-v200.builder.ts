import { z } from "zod";
import { StageBuilder } from "../../stage.builder";

const NWRequestv200Schema = z.object({
	url: z.string(),
	method: z.string(), // type: dictionary
	headers: z.object({}).passthrough().optional(),
	defaultAuth: z.boolean().optional(),
	queryString: z.object({}).passthrough().optional(),
	body: z.any().optional(),
	sbody: z.string().optional(),
	simulation: z.boolean().optional()
});
type NWRequestv200Data = z.infer<typeof NWRequestv200Schema>;

interface NextStage {
	SUCCESS: string;
	ERROR: string;
}

export class NWRequestv200Builder extends StageBuilder<
	NWRequestv200Data,
	NextStage
> {
	constructor(key: string) {
		super(key, "NWRequest", "2.0.0", NWRequestv200Schema);
		this.next.SUCCESS = "";
		this.next.ERROR = "";
	}

	setUrl(url: string): this {
		this.data.url = url;
		return this;
	}

	setMethod(method: string): this {
		this.data.method = method;
		return this;
	}

	setHeaders(headers: Record<string, unknown>): this {
		this.data.headers = headers;
		return this;
	}

	setDefaultAuth(defaultAuth: boolean): this {
		this.data.defaultAuth = defaultAuth;
		return this;
	}

	setQueryString(queryString: Record<string, unknown>): this {
		this.data.queryString = queryString;
		return this;
	}

	setBody(body: any): this {
		this.data.body = body;
		return this;
	}

	setSbody(sbody: string): this {
		this.data.sbody = sbody;
		return this;
	}

	setSimulation(simulation: boolean): this {
		this.data.simulation = simulation;
		return this;
	}

	setSuccess(key: string): this {
		this.next.SUCCESS = key;
		return this;
	}

	setError(key: string): this {
		this.next.ERROR = key;
		return this;
	}
} 