Project {
  dataValues: {
    id: 1,
    projectName: 'Meditations',
    projectContent: null,
    createdAt: 2018 - 11 - 24 T23: 19: 42.000 Z,
    updatedAt: 2018 - 11 - 24 T23: 19: 42.000 Z,
    UserId: 1,
    Topics: [
      [Topic],
      [Topic],
      [Topic]
    ]
  },
  _previousDataValues: {
    id: 1,
    projectName: 'Meditations',
    projectContent: null,
    createdAt: 2018 - 11 - 24 T23: 19: 42.000 Z,
    updatedAt: 2018 - 11 - 24 T23: 19: 42.000 Z,
    UserId: 1,
    Topics: [
      [Topic],
      [Topic],
      [Topic]
    ]
  },
  _changed: {},
  _modelOptions: {
    timestamps: true,
    validate: {},
    freezeTableName: false,
    underscored: false,
    underscoredAll: false,
    paranoid: false,
    rejectOnEmpty: false,
    whereCollection: {
      id: '1'
    },
    schema: null,
    schemaDelimiter: '',
    defaultScope: {},
    scopes: [],
    indexes: [],
    name: {
      plural: 'Projects',
      singular: 'Project'
    },
    omitNull: false,
    sequelize: Sequelize {
      options: [Object],
      config: [Object],
      dialect: [MysqlDialect],
      queryInterface: [QueryInterface],
      models: [Object],
      modelManager: [ModelManager],
      connectionManager: [ConnectionManager],
      importCache: [Object],
      test: [Object]
    },
    hooks: {},
    uniqueKeys: {}
  },
  _options: {
    isNewRecord: false,
    _schema: null,
    _schemaDelimiter: '',
    include: [
      [Object]
    ],
    includeNames: ['Topics'],
    includeMap: {
      Topics: [Object]
    },
    includeValidated: true,
    attributes: ['id',
      'projectName',
      'projectContent',
      'createdAt',
      'updatedAt',
      'UserId'
    ],
    raw: true
  },
  
  __eagerlyLoadedAssociations: [],

  isNewRecord: false,

  Topics: [Topic {
      dataValues: [Object],
      _previousDataValues: [Object],
      _changed: {},
      _modelOptions: [Object],
      _options: [Object],
      __eagerlyLoadedAssociations: [],
      isNewRecord: false
    },
    Topic {
      dataValues: [Object],
      _previousDataValues: [Object],
      _changed: {},
      _modelOptions: [Object],
      _options: [Object],
      __eagerlyLoadedAssociations: [],
      isNewRecord: false
    },
    Topic {
      dataValues: [Object],
      _previousDataValues: [Object],
      _changed: {},
      _modelOptions: [Object],
      _options: [Object],
      __eagerlyLoadedAssociations: [],
      isNewRecord: false
    }
  ]

}