import { z } from "zod";
import { StageBuilder } from "../../stage.builder";

const PBChannelAddUserv200Schema = z.object({
	type: z.enum(["user", "boss", "property", "accessRole"]),
	user: z.array(z.string()),
	accessRole: z.string(),
	property: z.string(),
	channel: z.string(),
	operation: z.enum(["add", "remove"])
});
type PBChannelAddUserv200Data = z.infer<typeof PBChannelAddUserv200Schema>;

interface NextStage {
	ADDED: string;
	"NOT-ADDED": string;
	ERROR: string;
}

export class PBChannelAddUserv200Builder extends StageBuilder<
	PBChannelAddUserv200Data,
	NextStage
> {
	constructor(key: string) {
		super(key, "PBChannelAddUser", "2.0.0", PBChannelAddUserv200Schema);
		this.next.ADDED = "";
		this.next["NOT-ADDED"] = "";
		this.next.ERROR = "";
	}

	setType(type: PBChannelAddUserv200Data["type"]): this {
		this.data.type = type;
		return this;
	}

	setUser(user: string[]): this {
		this.data.user = user;
		return this;
	}

	setAccessRole(accessRole: string): this {
		this.data.accessRole = accessRole;
		return this;
	}

	setProperty(property: string): this {
		this.data.property = property;
		return this;
	}

	setChannel(channel: string): this {
		this.data.channel = channel;
		return this;
	}

	setOperation(operation: PBChannelAddUserv200Data["operation"]): this {
		this.data.operation = operation;
		return this;
	}

	setAdded(key: string): this {
		this.next.ADDED = key;
		return this;
	}

	setNotAdded(key: string): this {
		this.next["NOT-ADDED"] = key;
		return this;
	}

	setError(key: string): this {
		this.next.ERROR = key;
		return this;
	}
} 