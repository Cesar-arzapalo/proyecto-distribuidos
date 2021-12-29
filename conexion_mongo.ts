class Singleton{
    private static instance: Singleton;

    private constructor(){}

    public static getInstance(): Singleton{
        if(!Singleton.instance){
            Singleton.instance=new Singleton()
        }
        return Singleton.instance;
    }

    public getConexion(){
        return 'mongodb+srv://admin:12345@cluster0.bcg8b.mongodb.net/proyecto?retryWrites=true&w=majority';
    }
}