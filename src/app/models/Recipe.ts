export interface randomFood {
    id:number, 
    analyzedInstructions : AnalyzedInstructions[],
    title: string,
    extendedIngredients: ExtendedIngredients[],
    image: string,
    summary: string,
    dishTypes: string[],
}

interface AnalyzedInstructions{
    steps: Steps[]
}

interface Steps{
    number: number,
    step: string,
}

interface ExtendedIngredients{
    id: number,
    original:string,
}