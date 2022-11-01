interface MyData
{
    id:number;
    name: string;
    bankName: string;
    desc: string;
    tranType: string;
    amount: number;
    date: string;

}

export const TransData: MyData[] = [
    
    {
        id:1,
        name: "madabuchi david",
        bankName: "Aj Walltet",
        desc: "this for the cropto wallat Account plese confor payment",
        tranType:"credit",
        amount:500,
        date:"05 jan 2020"
    },
    {
        id:2,
        name: "obs chidi okon",
        bankName: "Aj Walltet",
        desc: "this for the cropto wallat Account plese confor payment",
        tranType:"debit",
        amount:500,
        date:"1 oct 2020"
    },
    {
        id:3,
        name: "Anyamah edwin Ndidi",
        bankName: "Aj Walltet",
        desc: "money for davis school fees confor payment",
        tranType:"credit",
        amount:100,
        date:"22 nov 2020"
    },
    {
        id:4,
        name: "Samuel Peter chidi",
        bankName: "Aj Walltet",
        desc: "buy the generator i ask you too payment",
        tranType:"debit",
        amount:700,
        date:"30 june 2020"
    },
    {
        id:5,
        name: "okon chucks",
        bankName: "Aj Walltet",
        desc: "for your birthday gift love yous",
        tranType:"debit",
        amount:700,
        date:"12 dec 2020"
    }
]