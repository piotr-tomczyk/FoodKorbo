import { FormGroup } from '@angular/forms';
import { users } from './users';  

export const ConfirmedValidator = (controlName: string, matchingControlName: string) => {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors?.['ConfirmedValidator']) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmedValidator: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}
export const MatchValidator = (controlName: string) => {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        let isUser = false;
        if(controlName == "username"){
            isUser = checkUserName(control.value);
        }
        if(controlName == "password"){
            isUser = checkPassword(control.value);
        }
        if (!isUser) {
            control.setErrors({ matchValidator: true });
        } else {
            control.setErrors(null);
        }
    }
}
const checkUserName = (control:string) => {
    let isUser = false;
    users.forEach(user => {
        if(user.username == control){
            isUser = true;
        }
    });
    return isUser;
}
const checkPassword = (control:string) => {
    let isUser = false;
    users.forEach(user => {
        if(user.password == control){
            isUser = true;
        }
    });
    return isUser;
}