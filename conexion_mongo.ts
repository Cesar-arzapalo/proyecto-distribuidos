export class Singleton{
    private static instance: Singleton;

    private constructor(){}

    public static getInstance(): Singleton{
        if(!Singleton.instance){
            Singleton.instance=new Singleton()
        }
        return Singleton.instance;
    }

    public getConexion(){
        return 'mongodb+srv://aptir:JvE0AEJYaxMtxqaz@cluster0.fnwct.mongodb.net/PostresNaturales?retryWrites=true&w=majority';
    }
}