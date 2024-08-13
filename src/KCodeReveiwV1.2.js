function Script0001(){
BotUserSession.put("ProjectID",context.entities.projects_response_entity);
const projectObj = BotUserSession.get("ProjectObject");
var selectedProject_name = projectObj[context.entities.projects_response_entity];
BotContext.put("Project_Name",selectedProject_name);
}
function setSelFileScript(){
const fileResponse = BotUserSession.get("fileListResponse");
// print(`=>>>>>>>>fileResponse----- ${fileResponse}`);
for(let file of fileResponse) {
    if(file?.name === context.entities.FileListEntity) {
         BotUserSession.put ("selFileData", file);
         break;
     }
}

}
function filesRespScript(){
const fileListResponse = context.FileListService.response.body.files;
BotUserSession.put("fileListResponse", fileListResponse);
}
