import {
	SchedulerBuilder,
	// Import one builder from each category
	CCJSv203Builder,
	FCIfElseBuilder,
	NWRequestBuilder,
	PBChangeStatev210Builder,
} from "../lib/scheduler-builder";

async function buildComprehensiveScheduler() {
	console.log("--- Building Comprehensive Example Scheduler ---");

	const schedulerName = "ComprehensiveExample";

	// Define keys for stages
	const startKey = "start_network_request";
	const conditionalKey = "check_status_code";
	const successStateChangeKey = "update_task_success";
	const errorJsKey = "log_error_details";
	const finalSuccessKey = "end_success"; // Dummy end stage
	const finalErrorKey = "end_error"; // Dummy end stage

	try {
		// --- Stages --- 

		// 1. Network Request Stage (NW)
		const networkStage = new NWRequestBuilder(startKey)
			.setUrl("https://api.example.com/status")
			.setMethod("GET")
			.setDefaultAuth(true)
			.setSuccess(conditionalKey) // Go to conditional check on success
			.setError(errorJsKey) // Go to error logging on failure
			.build();

		// 2. Conditional Stage (FC) - Check status code from NW request
		const conditionalStage = new FCIfElseBuilder(conditionalKey)
			.setLeft("{{stages.start_network_request.output.statusCode}}") // Access previous stage output
			.setOperator("eq")
			.setRight("200")
			.setIf(successStateChangeKey) // Go to state change if status is 200
			.setElse(errorJsKey) // Go to error logging otherwise
			.build();

		// 3. State Change Stage (PB) - If network request was successful
		const stateChangeStage = new PBChangeStatev210Builder(successStateChangeKey)
			.setTid("{{input.taskId}}") // Assume taskId comes from scheduler input
			.setTaskGroup("{{input.taskGroupId}}")
			.setSmState("completed_successfully")
			.setSuccess(finalSuccessKey) // End on success
			.setError(errorJsKey) // Log error if state change fails
			.build();

		// 4. Custom JS Stage (CCJS) - Log details on error
		const errorJsStage = new CCJSv203Builder(errorJsKey)
			.setSrc(`
                console.error('Scheduler Error');
                console.error('Input:', JSON.stringify(input));
                console.error('Output:', JSON.stringify(output));
                // You might want to send a notification here
                return { errorLogged: true };
            `)
			.setSuccess(finalErrorKey) // End after logging
			.setError(finalErrorKey) // End anyway if JS fails
			.build();

		// --- Build Scheduler --- 
		const scheduler = new SchedulerBuilder(schedulerName)
			.addStage(networkStage)
			.addStage(conditionalStage)
			.addStage(stateChangeStage)
			.addStage(errorJsStage)
			// Note: We haven't defined the dummy 'end_success' or 'end_error' stages.
			// A real scheduler would need proper termination stages.
			.setStartStage(startKey)
			.build();

		console.log("\n--- Comprehensive Scheduler Built Successfully: ---");
		console.log(JSON.stringify(scheduler, null, 2));

	} catch (error) {
		console.error("\n--- Error Building Comprehensive Scheduler: ---");
		console.error(error);
	}
}

buildComprehensiveScheduler(); 