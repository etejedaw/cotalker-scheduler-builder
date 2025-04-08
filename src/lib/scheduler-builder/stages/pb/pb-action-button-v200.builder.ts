import { z } from "zod";
import { StageBuilder } from "../../stage.builder";

const PBActionButtonv200Schema = z.object({
	isActive: z.boolean(),
	channelId: z.string(),
	actionType: z.string(),
	channelProperties: z.array(z.string()).optional(),
	accessRoles: z.array(z.string()).optional(),
	uri: z.string().optional(),
	queryParams: z.record(z.string(), z.string()).optional(),
	windowConfig: z.string().optional(),
	windowName: z.string().optional(),
	openMode: z.string().optional()
});
type PBActionButtonv200Data = z.infer<typeof PBActionButtonv200Schema>;

interface NextStage {
	SUCCESS: string;
	ERROR: string;
}

export class PBActionButtonv200Builder extends StageBuilder<
	PBActionButtonv200Data,
	NextStage
> {
	constructor(key: string) {
		super(key, "PBActionButton", "2.0.0", PBActionButtonv200Schema);
		this.next.SUCCESS = "";
		this.next.ERROR = "";
	}

	setIsActive(isActive: boolean): this {
		this.data.isActive = isActive;
		return this;
	}

	setChannelId(channelId: string): this {
		this.data.channelId = channelId;
		return this;
	}

	setActionType(actionType: string): this {
		this.data.actionType = actionType;
		return this;
	}

	setChannelProperties(channelProperties: string[]): this {
		this.data.channelProperties = channelProperties;
		return this;
	}

	setAccessRoles(accessRoles: string[]): this {
		this.data.accessRoles = accessRoles;
		return this;
	}

	setUri(uri: string): this {
		this.data.uri = uri;
		return this;
	}

	setQueryParams(queryParams: Record<string, string>): this {
		this.data.queryParams = queryParams;
		return this;
	}

	setWindowConfig(windowConfig: string): this {
		this.data.windowConfig = windowConfig;
		return this;
	}

	setWindowName(windowName: string): this {
		this.data.windowName = windowName;
		return this;
	}

	setOpenMode(openMode: string): this {
		this.data.openMode = openMode;
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