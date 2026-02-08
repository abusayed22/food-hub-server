import { prisma } from "../lib/prisma"
import { Role } from "../src/constants/role.type"


export async function seedAdmin() {
    try {
        
        const adminData = {
            name: "Sayed Admin",
            email: "abusayed.learn@gmail.com",
            password: "12345678" ,
            // role : Role.admin
        }

        const existingUser = await prisma.user.findUnique({
            where: {
                email: adminData.email
            }
        });

        if(existingUser){
            throw new Error("Admin user already exist!")
        }

        const signAdmin = await fetch(`${'http://localhost:5000/api'}/auth/sign-up/email`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Origin': 'http://localhost:5000'
            },
            body:JSON.stringify(adminData)
        })

        
        if (!signAdmin.ok) {
            const errorText = await signAdmin.text();
            throw new Error(`Failed to create user: ${signAdmin.status} ${errorText}`);
        }

        const updateAdmin = await prisma.user.update({
            where: { email: adminData.email },
            data: { 
                role: 'ADMIN', 
                emailVerified: true 
            }
        });

        console.log(`✅ Success! Created Admin: ${updateAdmin.email}`);

    } catch (error) {
        console.log(error)
    }
}




seedAdmin()