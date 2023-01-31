import { UpdateUserGeneralInfoAccordion } from "./UpdateUserGeneralInfoAccordion"
import { UpdateUserPasswordAccordion } from "./UpdateUserPasswordAccordion"

interface UpdateUserFormWrapperProps {
    userId: string;
}

function UpdateUserFormWrapper(props: UpdateUserFormWrapperProps){
    return <>
        <UpdateUserGeneralInfoAccordion userId={props.userId}></UpdateUserGeneralInfoAccordion>
        <UpdateUserPasswordAccordion userId={props.userId}></UpdateUserPasswordAccordion>
    </>
}

export { UpdateUserFormWrapper }