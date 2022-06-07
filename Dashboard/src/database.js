export const userColumns = [
    {field: 'id', headerName: 'ID', width: 70},
    {field: 'User', headerName: 'User', width: 200, renderCell: (params) => {
        return ( 
            <div className="cellWithImg">
                <img className="cellWithImg_img" src={params.row.avatar} alt="avatar" />
                {params.row.username}

            </div>
         )
     }
    },
    {field: 'email', headerName: 'Email', width: 250},
    {field: 'age', headerName: 'Age', width: 100},
    {field: 'status', headerName: 'Status', width: 150,
        renderCell:(params) => {
            return (
                <div className = {`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
            );
        },
    },
];

export const userRows = [ 
    {
        id: 1,
        username: 'John',
        email: 'ted1804@gmail.com',
        age: '25',
        avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        status: "active",
    }, 
    {
        id: 2,
        username: 'Jane',
        email: 'dsad@gmail.com',
        age: '25',
        avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        status: 'inactive',
    },
    {
        id: 3,
        username: 'Jack',
        email: 'ted1804@gmail.com',
        age: '25',
        avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        status: 'pending',
    },
    {
        id: 4,
        username: 'Jill',
        email: 'ted1804@gmail.com',
        age: '30',
        avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        status: 'active',
    },
    {
        id: 5,
        username: 'John',
        email: 'ted1804@gmail.com',
        age: '35',
        avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        status: 'active',
    },
    {
        id: 6,
        username: 'Jane',
        email: 'ted1804@gmail.com',
        age: '45',
        avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        status: 'active',
    },
    {
        id: 7,
        username: 'John',
        email: 'ted1804@gmail.com',
        age: '25',
        avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        status: "active",
    }, 
    {
        id: 8,
        username: 'Jane',
        email: 'dsad@gmail.com',
        age: '25',
        avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        status: 'inactive',
    },
    {
        id: 9,
        username: 'Jack',
        email: 'ted1804@gmail.com',
        age: '25',
        avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        status: 'pending',
    },
    {
        id: 10,
        username: 'Jill',
        email: 'ted1804@gmail.com',
        age: '30',
        avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        status: 'active',
    },
    {
        id: 15,
        username: 'John',
        email: 'ted1804@gmail.com',
        age: '35',
        avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        status: 'active',
    },
    {
        id: 16,
        username: 'Jane',
        email: 'ted1804@gmail.com',
        age: '45',
        avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        status: 'active',
    },
    {
        id: 16,
        username: 'Jane',
        email: 'ted1804@gmail.com',
        age: '45',
        avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        status: 'active',
    },
    {
        id: 16,
        username: 'Jane',
        email: 'ted1804@gmail.com',
        age: '45',
        avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        status: 'active',
    },
    {
        id: 16,
        username: 'Jane',
        email: 'ted1804@gmail.com',
        age: '45',
        avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        status: 'active',
    },
    {
        id: 16,
        username: 'Jane',
        email: 'ted1804@gmail.com',
        age: '45',
        avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        status: 'active',
    },
]