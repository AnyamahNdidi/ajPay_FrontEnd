import { atom } from "recoil";
import { user, userWallet } from "../Myinterface/Allinterface"
import { recoilPersist } from "recoil-persist"

const {persistAtom} = recoilPersist()

export const users = atom({
    key: "user",
    default: [] as Array<user> | null,
    effects_UNSTABLE: [persistAtom],
    
})

export const walltet = atom({
    key: "wallets",
    default: [] as Array<userWallet> | null,
    effects_UNSTABLE: [persistAtom],
})

export const account = atom({
    key: "account",
    default : [ ]as Array<userWallet> | null
    
})