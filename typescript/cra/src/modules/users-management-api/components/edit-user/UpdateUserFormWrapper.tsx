import { UpdateUserGeneralInfoAccordion } from "./UpdateUserGeneralInfoAccordion"
import { UpdateUserPasswordAccordion } from "./UpdateUserPasswordAccordion"

interface UpdateUserFormWrapperProps {
    userId: string;
    handleExit: () => void;
}

function UpdateUserFormWrapper(props: UpdateUserFormWrapperProps){
    return <>
        <UpdateUserGeneralInfoAccordion userId={props.userId} exitHandler={props.handleExit}></UpdateUserGeneralInfoAccordion>
        <UpdateUserPasswordAccordion userId={props.userId}></UpdateUserPasswordAccordion>
    </>
}

export { UpdateUserFormWrapper }