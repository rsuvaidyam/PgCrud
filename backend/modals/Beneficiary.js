require('../dbconnection/db');

module.exports = ((sequelize, type) => {
    const Beneficiary = sequelize.define('beneficiary', {
        id: {
            type: type.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: type.INTEGER(10),
            require: true,
            reference: {
                modal: 'user',
                key: 'id'
            },
        },
        state: {
            type: type.INTEGER(25),
            require: true,
        },
        district: {
            type: type.INTEGER(25),
            require: true,
        },
        block: {
            type: type.INTEGER(25),
            require: true,
        },
        village: {
            type: type.INTEGER(25),
            require: true,
        },
        first_name: {
            type: type.STRING(25),
            require: true,
        },
        email: {
            type: type.STRING(25),
            require: true,
        },
        mobile: {
            type: type.STRING(10),
            require: true,
            unique: {
                args: true,
                msg: 'Mobile no. Already Exist!',
            }
        },
        photo: {
            type: type.STRING(25),
            require: true,
        },
        gender: {
            type: type.ENUM,
            defaultValue: '1',
            values: ["0", "1", "2"],
            comment: `0: Inactive  1: Male 2 : Female`,
        },
        Education: {
            type: type.ENUM,
            defaultValue: '1',
            values: ["0", "1", "2", "3", "4", "5", "6","7"],
            comment: `0: Inactive  1: 8th 2 : 9th 3: 10th  4: 11th 5 : 12th  6: Graduation 7 : Postgraduation `,
        },
        Address: {
            type: type.STRING(100),
            require: true,
        },
        is_deleted: {
            type: type.ENUM,
            defaultValue: '1',
            values: ["0", "1", "2"],
            comment: `0: Inactive  1: Active 2 : Delete`,
        },
        created_at: {
            type: type.DATE,
            defaultValue: type.NOW
        },
        updated_at: {
            type: type.DATE,
            defaultValue: type.NOW
        },
        is_deleted_by: {
            type: type.INTEGER(11),
        },
        deleted_at: {
            type: type.DATE,
        },
        created_by: {
            type: type.INTEGER(11),
            reference: {
                modal: 'User',
                key: 'id'
            },
        },
        updated_by: {
            type: type.INTEGER(11)
        }


    }, { freezeTableName: true, timestamps: false });

    return Beneficiary;
})(sequelize, Sequelize);