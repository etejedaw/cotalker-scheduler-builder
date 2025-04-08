import { z } from "zod";
import { StageBuilder } from "../../stage.builder";

const FCSwitchOneSchema = z.object({
	lexpression: z.any(),
	rcaseA: z.any(),
	rcaseB: z.any(),
	rcaseC: z.any(),
	rcaseD: z.any(),
	rcaseE: z.any(),
	operator: z.string().optional()
});
type FCSwitchOneData = z.infer<typeof FCSwitchOneSchema>;

interface NextStage {
	CASE_A: string;
	CASE_B: string;
	CASE_C: string;
	CASE_D: string;
	CASE_E: string;
	DEFAULT: string;
}

export class FCSwitchOneBuilder extends StageBuilder<FCSwitchOneData, NextStage> {
	constructor(key: string) {
		super(key, "FCSwitchOne", null, FCSwitchOneSchema);
		this.next.CASE_A = "";
		this.next.CASE_B = "";
		this.next.CASE_C = "";
		this.next.CASE_D = "";
		this.next.CASE_E = "";
		this.next.DEFAULT = "";
	}

	setLexpression(lexpression: any): this {
		this.data.lexpression = lexpression;
		return this;
	}

	setRcaseA(rcaseA: any): this {
		this.data.rcaseA = rcaseA;
		return this;
	}

	setRcaseB(rcaseB: any): this {
		this.data.rcaseB = rcaseB;
		return this;
	}

	setRcaseC(rcaseC: any): this {
		this.data.rcaseC = rcaseC;
		return this;
	}

	setRcaseD(rcaseD: any): this {
		this.data.rcaseD = rcaseD;
		return this;
	}

	setRcaseE(rcaseE: any): this {
		this.data.rcaseE = rcaseE;
		return this;
	}

	setOperator(operator: string): this {
		this.data.operator = operator;
		return this;
	}

	setCaseA(key: string): this {
		this.next.CASE_A = key;
		return this;
	}

	setCaseB(key: string): this {
		this.next.CASE_B = key;
		return this;
	}

	setCaseC(key: string): this {
		this.next.CASE_C = key;
		return this;
	}

	setCaseD(key: string): this {
		this.next.CASE_D = key;
		return this;
	}

	setCaseE(key: string): this {
		this.next.CASE_E = key;
		return this;
	}

	setDefault(key: string): this {
		this.next.DEFAULT = key;
		return this;
	}
} 