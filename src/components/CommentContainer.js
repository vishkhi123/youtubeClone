const commentsData = [
  {
    name: "Vishal Khiratkar",
    text: "Hello guys",
    replies: [],
  },
  {
    name: "rupesh",
    text: "Hello boys",
    replies: [
      {
        name: "Vishal Khiratkar",
        text: "Hello guys",
        replies: [],
      },
      {
        name: "Vishal Khiratkar",
        text: "Hello guys",
        replies: [
          {
            name: "Vishal Khiratkar",
            text: "Hello guys",
            replies: [],
          },
          {
            name: "Vishal Khiratkar",
            text: "Hello guys",
            replies: [],
          },
          {
            name: "Vishal Khiratkar",
            text: "Hello guys",
            replies: [],
          },
          {
            name: "Vishal Khiratkar",
            text: "Hello guys",
            replies: [],
          },
          {
            name: "Vishal Khiratkar",
            text: "Hello guys",
            replies: [
              {
                name: "Vishal Khiratkar",
                text: "Hello guys",
                replies: [],
              },
              {
                name: "Vishal Khiratkar",
                text: "Hello guys",
                replies: [],
              },
              {
                name: "Vishal Khiratkar",
                text: "Hello guys",
                replies: [],
              },
              {
                name: "Vishal Khiratkar",
                text: "Hello guys",
                replies: [],
              },
              {
                name: "Vishal Khiratkar",
                text: "Hello guys",
                replies: [],
              },
              {
                name: "Vishal Khiratkar",
                text: "Hello guys",
                replies: [],
              },
              {
                name: "Vishal Khiratkar",
                text: "Hello guys",
                replies: [
                  {
                    name: "Vishal Khiratkar",
                    text: "Hello guys",
                    replies: [],
                  },
                  {
                    name: "Vishal Khiratkar",
                    text: "Hello guys",
                    replies: [],
                  },
                  {
                    name: "Vishal Khiratkar",
                    text: "Hello guys",
                    replies: [],
                  },
                  {
                    name: "Vishal Khiratkar",
                    text: "Hello guys",
                    replies: [],
                  },
                  {
                    name: "Vishal Khiratkar",
                    text: "Hello guys",
                    replies: [
                      {
                        name: "Vishal Khiratkar",
                        text: "Hello guys",
                        replies: [],
                      },
                      {
                        name: "Vishal Khiratkar",
                        text: "Hello guys",
                        replies: [],
                      },
                      {
                        name: "Vishal Khiratkar",
                        text: "Hello guys",
                        replies: [
                          {
                            name: "Vishal Khiratkar",
                            text: "Hello guys",
                            replies: [
                              {
                                name: "Vishal Khiratkar",
                                text: "Hello guys",
                                replies: [
                                  {
                                    name: "Vishal Khiratkar",
                                    text: "Hello guys",
                                    replies: [
                                      {
                                        name: "Vishal Khiratkar",
                                        text: "Hello guys",
                                        replies: [],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Vishal Khiratkar",
        text: "Hello guys",
        replies: [],
      },
      {
        name: "Vishal Khiratkar",
        text: "Hello guys",
        replies: [],
      },
      {
        name: "Vishal Khiratkar",
        text: "Hello guys",
        replies: [],
      },
      {
        name: "Vishal Khiratkar",
        text: "Hello guys",
        replies: [],
      },
      {
        name: "Vishal Khiratkar",
        text: "Hello guys",
        replies: [],
      },
      {
        name: "Vishal Khiratkar",
        text: "Hello guys",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
    const {name,text,replies}=data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg">
    <img 
    className="w-12 h-12"
    alt="user"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHSsHb1Ty42_g6zN1tnTiywo-TVKOayGaB5nV33DZsChhI00tFflshZJAvQkkeuXeeicA&usqp=CAU" />

    <div className="px-3">
    <p className="font-bold">{name}</p>
    <p>{text}</p>
    </div>

    </div>
  );
};

const CommentsList=({comments})=>{

    return comments.map((comment,index)=>(
        <Comment key={index} data={comment} />
    ));

};



const CommentContainer = ({comments}) => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold"> Comments:</h1>
      <Comment data={commentsData[0]} />
    </div>
  );
};
export default CommentContainer;
