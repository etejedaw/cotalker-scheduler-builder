import { z } from "zod";
import { StageBuilder } from "./stage.builder";

const NWRequestSchema = z.object({
	url: z.string(),
	method: z.enum(["POST", "GET", "PUT", "PATCH", "DELETE"]),
	headers: z.record(z.string(), z.unknown()).optional(),
	body: z
		.record(z.string(), z.unknown())
		.or(z.string())
		.or(z.array(z.record(z.string(), z.unknown())))
		.optional(),
	queryString: z.record(z.string(), z.unknown()).optional(),
	defaultAuth: z.boolean().optional()
});
type NWRequestData = z.infer<typeof NWRequestSchema>;

export class NWRequestBuilder extends StageBuilder<NWRequestData> {
	constructor(key: string) {
		super(key, "NWRequest", "2.0.0", NWRequestSchema);
		this.next.ERROR = "";
		this.next.SUCCESS = "";
	}

	setUrl(url: string): this {
		this.data.url = url;
		return this;
	}

	setMethod(method: NWRequestData["method"]): this {
		this.data.method = method;
		return this;
	}

	setHeaders(headers: Record<string, unknown>): this {
		this.data.headers = headers;
		return this;
	}

	setBody(
		body: Record<string, unknown> | string | Record<string, unknown>[]
	): this {
		this.data.body = body;
		return this;
	}

	setQueryString(queryStrings: Record<string, unknown>): this {
		this.data.queryString = queryStrings;
		return this;
	}

	addCotalkerAuth(): this {
		this.data.defaultAuth = true;
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
