db.dropDatabase();

db.cargos.drop();
db.cargos.insertMany([
    {
        _id:1,
        desc: 'Celador'
    },
    {
        _id:2,
        desc: 'Auxiliar de enfermeria'
    },
    {
        _id:3,
        desc: 'Encargado de limpieza y desinfeccion'
    },
    {
        _id:4,
        desc: 'Auxiliar de enfermeria en practicas'
    },
    {
        _id:5,
        desc: 'Conductor de ambulancia'
    },
    {
        _id:6,
        desc: 'Compañero de ambulancia'
    },
    {
        _id:7,
        desc: 'Recepcionista'
    },
    {
        _id:8,
        desc: 'Medico general'
    },
    {
        _id:9,
        desc: 'Tecnico de rayos'
    }
]);

db.empleados.drop();
db.empleados.insertMany([
    {
    	_id: 1,
        apellidos: 'Flintiff', 
        nombre: 'Po', 
        fec_nac: new Date ('1986-02-04'), 
        cod_pos: '14-420', 
        dir: '4 Nevada Court', 
        telf: '+48 639 727 6892', 
        cargo: 1, 
        fec_cont: new Date('2012-01-18'),
        sueldo: 949
    },
	{
		_id: 2,
        apellidos: 'Ximenez', 
        nombre: 'Nelie', 
        fec_nac: new Date ('1950-11-22'), 
        cod_pos: '662174', 
        dir: '48773 Prairie Rose Trail', 
        telf: '+7 311 246 6716', 
        cargo: 2, 
        fec_cont: new Date('2009-01-10'), 
        sueldo: 1247
    },
	{
		_id: 3,
        apellidos: 'Crich', 
        nombre: 'Torbjorn', 
        fec_nac: new Date ('1995-09-19'), 
        cod_pos: '19141', 
        dir: '457 Morning Alley', 
        telf: '+1 215 682 2405', 
        cargo: 3, 
        fec_cont: new Date('2018-10-30'), 
        sueldo: 1277
    },
	{
		_id: 4,
        apellidos: 'Ellcock', 
        nombre: 'Gisele', 
        fec_nac: new Date ('1998-12-22'), 
        cod_pos: '6549', 
        dir: '8448 Sheridan Alley', 
        telf: '+30 639 908 6378', 
        cargo: 4, 
        fec_cont: new Date('2013-04-07')
    },
	{
		_id: 5,
        apellidos: 'Greer', 
        nombre: 'Berengere', 
        fec_nac: new Date ('1958-09-22'), 
        cod_pos: '3515', 
        dir: '8 Mcguire Road', 
        telf: '+54 966 994 3244', 
        cargo: 5, 
        fec_cont: new Date('2018-10-10'), 
        sueldo: 1231
    },
	{
		_id: 6,
        apellidos: 'Ghest', 
        nombre: 'Gosta', 
        fec_nac: new Date ('1989-01-27'), 
        cod_pos: '5494', 
        dir: '37654 Mesta Park', 
        telf: '+62 199 755 1565', 
        cargo: 6, 
        fec_cont: new Date('2018-10-11'), 
        sueldo: 1233
    },
	{
		_id: 7,
        apellidos: 'Girone', 
        nombre: 'Helena', 
        fec_nac: new Date ('1973-12-26'), 
        cod_pos: '59861', 
        dir: '3333 Cottonwood Avenue', 
        telf: '+86 239 940 4360', 
        cargo: 7, 
        fec_cont: new Date('2012-07-22'), 
        sueldo: 1205
    },
	{
		_id: 8,
        apellidos: 'Stoakes', 
        nombre: 'Adele', 
        fec_nac: new Date ('1959-04-11'), 
        cod_pos: '607614', 
        dir: '60 Sycamore Trail', 
        telf: '+7 568 111 0983', 
        cargo: 6, 
        fec_cont: new Date('2007-12-09'), 
        sueldo: 1279
    },
	{
		_id: 9,
        apellidos: 'Serjeant', 
        nombre: 'Serena', 
        fec_nac: new Date ('1960-03-16'), 
        cod_pos: '2260-510', 
        dir: '51053 Lukken Alley', 
        telf: '+351 980 138 5247', 
        cargo: 2, 
        fec_cont: new Date('2014-11-06'), 
        sueldo: 871
    },
	{
		_id: 10,
        apellidos: 'Blazi', 
        nombre: 'Melys', 
        fec_nac: new Date ('1971-09-03'), 
        cod_pos: '926819', 
        dir: '01202 Garrison Hill', 
        telf: '+355 483 858 9334', 
        cargo: 7, 
        fec_cont: new Date('2020-07-11'), 
        sueldo: 1136
    },
	{
		_id: 11,
        apellidos: 'Beaver', 
        nombre: 'Cecile', 
        fec_nac: new Date ('1990-02-25'), 
        cod_pos: '65194', 
        dir: '1686 Gale Crossing', 
        telf: '+234 956 371 3957', 
        cargo: 7, 
        fec_cont: new Date('2017-12-10'), 
        sueldo: 1138
    },
	{
		_id: 12,
        apellidos: 'Mohammad', 
        nombre: 'Leandre', 
        fec_nac: new Date ('1955-07-08'), 
        cod_pos: '94986', 
        dir: '07 Buell Crossing', 
        telf: '+86 765 727 8105', 
        cargo: 8, 
        fec_cont: new Date('2019-09-24'), 
        sueldo: 1247
    },
	{
		_id: 13,
        apellidos: 'Tolworth', 
        nombre: 'Meryl', 
        fec_nac: new Date ('1981-06-28'), 
        cod_pos: '848961', 
        dir: '036 Norway Maple Court', 
        telf: '+86 406 304 2205', 
        cargo: 8, 
        fec_cont: new Date('2012-12-27'), 
        sueldo: 1174
    },
	{
		_id: 14,
        apellidos: 'Demonge', 
        nombre: 'Marie', 
        fec_nac: new Date ('1980-07-09'), 
        cod_pos: '50990', 
        dir: '53 Mendota Place', 
        telf: '+60 478 670 6835', 
        cargo: 9, 
        fec_cont: new Date('2008-12-24'), 
        sueldo: 1259
    },
	{
		_id: 15,
        apellidos: 'Redihough', 
        nombre: 'Da', 
        fec_nac: new Date ('1988-03-14'), 
        cod_pos: '9849', 
        dir: '8 Rusk Trail', 
        telf: '+86 150 625 0244', 
        cargo: 2, 
        fec_cont: new Date('2018-04-20'), 
        sueldo: 1033
    },
	{
		_id: 16,
        apellidos: 'Bosdet', 
        nombre: 'Adelie', 
        fec_nac: new Date ('1982-09-25'), 
        cod_pos: '13546', 
        dir: '13 Stuart Terrace', 
        telf: '+62 343 200 9800', 
        cargo: 2, 
        fec_cont: new Date('2010-08-01'), 
        sueldo: 1003
    },
	{
		_id: 17,
        apellidos: 'Loan', 
        nombre: 'Reserves', 
        fec_nac: new Date ('1971-11-03'), 
        cod_pos: '5349', 
        dir: '8752 Oxford Hill', 
        telf: '+31 330 701 6509', 
        cargo: 3, 
        fec_cont: new Date('2007-08-11'), 
        sueldo: 1138
    },
	{
		_id: 18,
        apellidos: 'Oguz', 
        nombre: 'Ake', 
        fec_nac: new Date ('1963-01-15'), 
        cod_pos: 'H54', 
        dir: '367 Burning Wood Way', 
        telf: '+353 463 454 3126', 
        cargo: 2, 
        fec_cont: new Date('2011-12-25'), 
        sueldo: 1266
    },
	{
		_id: 19,
        apellidos: 'Richemond', 
        nombre: 'Nelie', 
        fec_nac: new Date ('1999-06-06'), 
        cod_pos: '16818', 
        dir: '1 Summer Ridge Pass', 
        telf: '+62 908 497 4122', 
        cargo: 4, 
        fec_cont: new Date('2007-12-11')
    },
	{
		_id: 20,
        apellidos: 'Farryn', 
        nombre: 'Cecile', 
        fec_nac: new Date ('1095-07-18'), 
        cod_pos: '481968', 
        dir: '18 Maple Junction', 
        telf: '+383 674 805 2951', 
        cargo: 9, 
        fec_cont: new Date('2012-10-27'), 
        sueldo: 1087}
]);

