# 1st error 
can't able to find sever
resolve - don't know it starts to find server after some time
# 2nd error 
req.body.json() is not the write syntax
resolve - remove .json(), req.body is ok
# 3rd error 
survey is creating but it is empty 
resolve - didn't put await before crud operation use await 

# 4th error 
you don't know how to pass data into .create({})
while creating the survey 
it goes like
{
        data:{
            title:title,
            questions:{
                create:questions.map((que)=>({
                    text:que.text,
                    option:{
                        create:que.option.map((opt)=>({
                            title:opt.title
                        }))
                    }
                }))
            }
        },
        include:{
            questions:{
                include:{
                    option:true
                }
            }
        }
    }
# Same goes for findmany 

# 5the error 
pass parameter id in url is recived as string 
resolve convert it to number Number(id)

# 6th error
the update syntax is wrong in put
{
        where:{
            id:Number(id)
        },
        data:{
            title:body.title,
            questions:{
                deleteMany:{},//delete existing questions and their options
                create:body.questions.map(que=>({
                    text:que.text,
                    option:{
                        create:que.option.map(o=>({
                            title:o.title
                        }))
                    }
                }))
            }
        }
    }

    