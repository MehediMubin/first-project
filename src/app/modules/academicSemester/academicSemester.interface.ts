export type Month = {
    name:
        | 'January'
        | 'February'
        | 'March'
        | 'April'
        | 'May'
        | 'June'
        | 'July'
        | 'August'
        | 'September'
        | 'October'
        | 'November'
        | 'December';
};

export type AcademicSemester = {
    name: 'Autumn' | 'Summer' | 'Fall';
    year: Date;
    code: '01' | '02' | '03';
    startMonth: Month;
    endMonth: Month;
};
