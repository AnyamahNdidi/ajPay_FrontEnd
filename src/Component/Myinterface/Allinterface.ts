export interface user
{
    userName: string,
    fullName: string,
    email: string,
    password: string,
    accessToken?: string,
    verify: boolean,
    account?: number,
    followers?: [],
    following?: [],
    wallet?: [],
    _id:string

}

export interface userWallet
{
    user: {},
    totalbalance: number,
    token: number,
    credit: number,
    debit: number,
    paymentDescription: string,
    history?:[]
    
}