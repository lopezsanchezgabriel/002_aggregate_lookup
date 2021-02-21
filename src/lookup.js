//Empleados en cada cargo 1:N
db.cargos.aggregate([
    {
        $lookup:{
            from: 'empleados',
            localField: '_id',
            foreignField: 'cargo',
            as: 'Empleados'
        }
    }
]).pretty()

// N:M
/*
db..aggregate([
    {
        $lookup:{
            from: '',
            localField: '',
            foreignField: '',
            as: ''
        }
    }
]).pretty()
*/

