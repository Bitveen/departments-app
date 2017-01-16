module.exports = {
    entry: __dirname + '/frontend/index.jsx',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/public/js'
    },
    resolve: {
        root: __dirname + '/frontend',
        alias: {
            App: 'components/App.jsx',
            Sidebar: 'components/Sidebar.jsx',
            Index: 'components/Index.jsx',
            DepartmentsList: 'components/DepartmentsList.jsx',
            Department: 'components/Department.jsx',
            actions: 'actions.jsx',
            reducers: 'reducers.jsx',
            DepartmentForm: 'components/DepartmentForm.jsx',
            DepartmentsListView: 'components/DepartmentsListView.jsx',
            DepartmentCreate: 'containers/DepartmentCreate.jsx',
            DepartmentEdit: 'containers/DepartmentEdit.jsx',
            DepartmentView: 'components/DepartmentView.jsx'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: __dirname + '/frontend',
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                }
            }
        ]
    }
};
