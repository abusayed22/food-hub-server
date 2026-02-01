import { prisma } from "../../../lib/prisma"
import { Role } from "../../constants/role.type"


const getAllUsers = async (user_id:string) => {
    const users = await prisma.user.findMany({
        where:{
            NOT:{
                id:user_id
            }
        }
    })
}



export const adminService = {
    getAllUsers,
}