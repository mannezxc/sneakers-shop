import axios from "axios"
import { sneakers } from "../../db"


export const SneakersData =  {
    async getAll() {
        const res = sneakers
        
        return res
    }
}