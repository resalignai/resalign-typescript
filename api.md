# Health

Types:

- <code><a href="./src/resources/health.ts">HealthCheckResponse</a></code>

Methods:

- <code title="get /v1/health">client.health.<a href="./src/resources/health.ts">check</a>() -> HealthCheckResponse</code>

# Taxonomy

Types:

- <code><a href="./src/resources/taxonomy.ts">TaxonomyListFunctionsResponse</a></code>
- <code><a href="./src/resources/taxonomy.ts">TaxonomyListRolesResponse</a></code>
- <code><a href="./src/resources/taxonomy.ts">TaxonomySearchSkillsResponse</a></code>

Methods:

- <code title="get /v1/taxonomy/functions">client.taxonomy.<a href="./src/resources/taxonomy.ts">listFunctions</a>() -> TaxonomyListFunctionsResponse</code>
- <code title="get /v1/taxonomy/roles">client.taxonomy.<a href="./src/resources/taxonomy.ts">listRoles</a>({ ...params }) -> TaxonomyListRolesResponse</code>
- <code title="get /v1/taxonomy/skills">client.taxonomy.<a href="./src/resources/taxonomy.ts">searchSkills</a>({ ...params }) -> TaxonomySearchSkillsResponse</code>

# Alignments

Types:

- <code><a href="./src/resources/alignments/alignments.ts">AlignmentRetrieveResponse</a></code>
- <code><a href="./src/resources/alignments/alignments.ts">AlignmentListResponse</a></code>
- <code><a href="./src/resources/alignments/alignments.ts">AlignmentGetResourcesStatusResponse</a></code>

Methods:

- <code title="get /v1/alignments/{alignment_id}">client.alignments.<a href="./src/resources/alignments/alignments.ts">retrieve</a>(alignmentID) -> unknown</code>
- <code title="get /v1/alignments">client.alignments.<a href="./src/resources/alignments/alignments.ts">list</a>() -> unknown</code>
- <code title="get /v1/alignments/{alignment_id}/resources">client.alignments.<a href="./src/resources/alignments/alignments.ts">getResourcesStatus</a>(alignmentID) -> unknown</code>

## Start

Types:

- <code><a href="./src/resources/alignments/start.ts">StartAlignment</a></code>
- <code><a href="./src/resources/alignments/start.ts">StartCreateResponse</a></code>
- <code><a href="./src/resources/alignments/start.ts">StartCreateWithStreamingResponse</a></code>

Methods:

- <code title="post /v1/alignments/start">client.alignments.start.<a href="./src/resources/alignments/start.ts">create</a>({ ...params }) -> unknown</code>
- <code title="post /v1/alignments/start/stream">client.alignments.start.<a href="./src/resources/alignments/start.ts">createWithStreaming</a>({ ...params }) -> unknown</code>

# Analysis

Types:

- <code><a href="./src/resources/analysis.ts">WeightFields</a></code>
- <code><a href="./src/resources/analysis.ts">AnalysisListResponse</a></code>
- <code><a href="./src/resources/analysis.ts">AnalysisGetQuotaResponse</a></code>
- <code><a href="./src/resources/analysis.ts">AnalysisRunResponse</a></code>

Methods:

- <code title="get /v1/analysis/fetch">client.analysis.<a href="./src/resources/analysis.ts">list</a>() -> unknown</code>
- <code title="get /v1/analysis/quota">client.analysis.<a href="./src/resources/analysis.ts">getQuota</a>() -> AnalysisGetQuotaResponse</code>
- <code title="post /v1/analysis/run">client.analysis.<a href="./src/resources/analysis.ts">run</a>({ ...params }) -> AnalysisRunResponse</code>

# Roadmaps

Types:

- <code><a href="./src/resources/roadmaps.ts">RoadmapListResponse</a></code>
- <code><a href="./src/resources/roadmaps.ts">RoadmapGenerateResponse</a></code>

Methods:

- <code title="get /v1/roadmaps/fetch">client.roadmaps.<a href="./src/resources/roadmaps.ts">list</a>() -> unknown</code>
- <code title="post /v1/roadmaps/generate">client.roadmaps.<a href="./src/resources/roadmaps.ts">generate</a>({ ...params }) -> RoadmapGenerateResponse</code>

# LearningPaths

Types:

- <code><a href="./src/resources/learning-paths/learning-paths.ts">LearningPathRetrieveResponse</a></code>
- <code><a href="./src/resources/learning-paths/learning-paths.ts">LearningPathListResponse</a></code>
- <code><a href="./src/resources/learning-paths/learning-paths.ts">LearningPathEnrollResponse</a></code>

Methods:

- <code title="get /v1/learning-paths/{path_id}">client.learningPaths.<a href="./src/resources/learning-paths/learning-paths.ts">retrieve</a>(pathID) -> unknown</code>
- <code title="get /v1/learning-paths">client.learningPaths.<a href="./src/resources/learning-paths/learning-paths.ts">list</a>() -> unknown</code>
- <code title="post /v1/learning-paths/enroll">client.learningPaths.<a href="./src/resources/learning-paths/learning-paths.ts">enroll</a>({ ...params }) -> unknown</code>

## Modules

Types:

- <code><a href="./src/resources/learning-paths/modules.ts">ModuleRetrieveResponse</a></code>
- <code><a href="./src/resources/learning-paths/modules.ts">ModuleGetContentResponse</a></code>
- <code><a href="./src/resources/learning-paths/modules.ts">ModuleGetResourcesResponse</a></code>

Methods:

- <code title="get /v1/learning-paths/{path_id}/modules/{module_id}">client.learningPaths.modules.<a href="./src/resources/learning-paths/modules.ts">retrieve</a>(moduleID, { ...params }) -> unknown</code>
- <code title="get /v1/learning-paths/{path_id}/modules/{module_id}/content">client.learningPaths.modules.<a href="./src/resources/learning-paths/modules.ts">getContent</a>(moduleID, { ...params }) -> unknown</code>
- <code title="get /v1/learning-paths/{path_id}/modules/{module_id}/resources">client.learningPaths.modules.<a href="./src/resources/learning-paths/modules.ts">getResources</a>(moduleID, { ...params }) -> unknown</code>

## Topics

Types:

- <code><a href="./src/resources/learning-paths/topics.ts">TopicCompleteResponse</a></code>
- <code><a href="./src/resources/learning-paths/topics.ts">TopicUncompleteResponse</a></code>

Methods:

- <code title="post /v1/learning-paths/{path_id}/topics/{topic_id}/complete">client.learningPaths.topics.<a href="./src/resources/learning-paths/topics.ts">complete</a>(topicID, { ...params }) -> unknown</code>
- <code title="post /v1/learning-paths/{path_id}/topics/{topic_id}/uncomplete">client.learningPaths.topics.<a href="./src/resources/learning-paths/topics.ts">uncomplete</a>(topicID, { ...params }) -> unknown</code>

# CompanyResearch

Types:

- <code><a href="./src/resources/company-research.ts">CompanyResearchRetrieveResponse</a></code>
- <code><a href="./src/resources/company-research.ts">CompanyResearchEnrichResponse</a></code>
- <code><a href="./src/resources/company-research.ts">CompanyResearchResultResponse</a></code>
- <code><a href="./src/resources/company-research.ts">CompanyResearchRunResponse</a></code>

Methods:

- <code title="get /v1/company_research/retrieve/{identifier}">client.companyResearch.<a href="./src/resources/company-research.ts">retrieve</a>(identifier) -> CompanyResearchRetrieveResponse</code>
- <code title="post /v1/company_research/enrich">client.companyResearch.<a href="./src/resources/company-research.ts">enrich</a>({ ...params }) -> CompanyResearchEnrichResponse</code>
- <code title="get /v1/company_research/result/{identifier}">client.companyResearch.<a href="./src/resources/company-research.ts">result</a>(identifier) -> CompanyResearchResultResponse</code>
- <code title="post /v1/company_research/run">client.companyResearch.<a href="./src/resources/company-research.ts">run</a>({ ...params }) -> unknown</code>

# JobsBoard

Types:

- <code><a href="./src/resources/jobs-board/jobs-board.ts">JobsBoardRefreshResponse</a></code>

Methods:

- <code title="post /v1/jobs_board/refresh_jobs">client.jobsBoard.<a href="./src/resources/jobs-board/jobs-board.ts">refresh</a>({ ...params }) -> JobsBoardRefreshResponse</code>

## Fetch

Types:

- <code><a href="./src/resources/jobs-board/fetch.ts">JobPosting</a></code>
- <code><a href="./src/resources/jobs-board/fetch.ts">FetchListResponse</a></code>

Methods:

- <code title="get /v1/jobs_board/fetch/{job_id}">client.jobsBoard.fetch.<a href="./src/resources/jobs-board/fetch.ts">retrieve</a>(jobID) -> JobPosting</code>
- <code title="get /v1/jobs_board/fetch">client.jobsBoard.fetch.<a href="./src/resources/jobs-board/fetch.ts">list</a>({ ...params }) -> FetchListResponse</code>

# Favorites

Types:

- <code><a href="./src/resources/favorites.ts">FavoriteListResponse</a></code>
- <code><a href="./src/resources/favorites.ts">FavoriteDeleteResponse</a></code>
- <code><a href="./src/resources/favorites.ts">FavoriteAddResponse</a></code>

Methods:

- <code title="get /v1/favorites/list">client.favorites.<a href="./src/resources/favorites.ts">list</a>() -> FavoriteListResponse</code>
- <code title="delete /v1/favorites/delete/{job_posting_id}">client.favorites.<a href="./src/resources/favorites.ts">delete</a>(jobPostingID) -> FavoriteDeleteResponse</code>
- <code title="post /v1/favorites/add/{job_posting_id}">client.favorites.<a href="./src/resources/favorites.ts">add</a>(jobPostingID) -> FavoriteAddResponse</code>

# Resume

Types:

- <code><a href="./src/resources/resume.ts">ResumeListResponse</a></code>
- <code><a href="./src/resources/resume.ts">ResumeDeleteResponse</a></code>
- <code><a href="./src/resources/resume.ts">ResumeDownloadResponse</a></code>
- <code><a href="./src/resources/resume.ts">ResumeRetryExtractionResponse</a></code>
- <code><a href="./src/resources/resume.ts">ResumeUploadResponse</a></code>

Methods:

- <code title="get /v1/resume/list">client.resume.<a href="./src/resources/resume.ts">list</a>() -> ResumeListResponse</code>
- <code title="delete /v1/resume/delete/{resume_id}">client.resume.<a href="./src/resources/resume.ts">delete</a>(resumeID) -> ResumeDeleteResponse</code>
- <code title="get /v1/resume/download/{resume_id}">client.resume.<a href="./src/resources/resume.ts">download</a>(resumeID) -> unknown</code>
- <code title="post /v1/resume/retry-extraction/{resume_id}">client.resume.<a href="./src/resources/resume.ts">retryExtraction</a>(resumeID) -> ResumeRetryExtractionResponse</code>
- <code title="post /v1/resume/upload">client.resume.<a href="./src/resources/resume.ts">upload</a>({ ...params }) -> ResumeUploadResponse</code>

# Profile

Types:

- <code><a href="./src/resources/profile.ts">ProfileRetrieveResponse</a></code>
- <code><a href="./src/resources/profile.ts">ProfileCompleteOnboardingResponse</a></code>
- <code><a href="./src/resources/profile.ts">ProfileMergeResumeResponse</a></code>
- <code><a href="./src/resources/profile.ts">ProfileSaveOnboardingStepResponse</a></code>
- <code><a href="./src/resources/profile.ts">ProfileUpdatePreferencesResponse</a></code>

Methods:

- <code title="get /v1/profile">client.profile.<a href="./src/resources/profile.ts">retrieve</a>() -> unknown</code>
- <code title="post /v1/profile/complete-onboarding">client.profile.<a href="./src/resources/profile.ts">completeOnboarding</a>() -> unknown</code>
- <code title="post /v1/profile/merge-resume">client.profile.<a href="./src/resources/profile.ts">mergeResume</a>() -> unknown</code>
- <code title="patch /v1/profile/step/{step}">client.profile.<a href="./src/resources/profile.ts">saveOnboardingStep</a>(step, { ...params }) -> unknown</code>
- <code title="patch /v1/profile">client.profile.<a href="./src/resources/profile.ts">updatePreferences</a>({ ...params }) -> unknown</code>

# Recommendations

Types:

- <code><a href="./src/resources/recommendations.ts">RecommendationListResponse</a></code>
- <code><a href="./src/resources/recommendations.ts">RecommendationRefreshResponse</a></code>
- <code><a href="./src/resources/recommendations.ts">RecommendationRefreshBatchResponse</a></code>

Methods:

- <code title="get /v1/recommendations">client.recommendations.<a href="./src/resources/recommendations.ts">list</a>() -> unknown</code>
- <code title="post /v1/recommendations/refresh">client.recommendations.<a href="./src/resources/recommendations.ts">refresh</a>() -> unknown</code>
- <code title="post /v1/recommendations/refresh-batch">client.recommendations.<a href="./src/resources/recommendations.ts">refreshBatch</a>({ ...params }) -> RecommendationRefreshBatchResponse</code>

# Assessments

Types:

- <code><a href="./src/resources/assessments.ts">AssessmentAutoAssessResponse</a></code>

Methods:

- <code title="post /v1/assessments/auto-assess">client.assessments.<a href="./src/resources/assessments.ts">autoAssess</a>({ ...params }) -> AssessmentAutoAssessResponse</code>

# Notifications

Types:

- <code><a href="./src/resources/notifications/notifications.ts">NotificationDeliverResponse</a></code>

Methods:

- <code title="post /v1/notifications/deliver">client.notifications.<a href="./src/resources/notifications/notifications.ts">deliver</a>({ ...params }) -> NotificationDeliverResponse</code>

## Preferences

Types:

- <code><a href="./src/resources/notifications/preferences.ts">PreferenceRetrieveResponse</a></code>
- <code><a href="./src/resources/notifications/preferences.ts">PreferenceUpdateResponse</a></code>

Methods:

- <code title="get /v1/notifications/preferences">client.notifications.preferences.<a href="./src/resources/notifications/preferences.ts">retrieve</a>() -> PreferenceRetrieveResponse</code>
- <code title="put /v1/notifications/preferences">client.notifications.preferences.<a href="./src/resources/notifications/preferences.ts">update</a>({ ...params }) -> PreferenceUpdateResponse</code>
