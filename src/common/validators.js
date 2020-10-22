export const allowedInputChars = value =>
    /^[0-9A-Za-z~=ÇüÜéâÂäàÀåçêÊëËèïÏîÎìÌÄÅÉôÔöòÒûÛùÙÖøØáÁóÓíÍúÚñÑßÈè |!?:#$%&`'’()*+,\-./\^@€¥£_]*$/.test(
        value
    ) || 'Text contains invalid character(s)'

export const maxLength = length => value =>
    (value + '').length <= length || `Please enter no more than ${length} characters`

export const minLength = length => value =>
    (value + '').length >= length || `Please enter at least ${length} characters`

export const required = value => !!value || `This field is required`
