export abstract class QueryFunction<T> {

  private readonly store !: T ;

  loading$(loading: boolean) {
    //this.store.setLoading(loading);
  } ;
  error$(error: any) {
   // this.store.setError(error);
  } ;
}
