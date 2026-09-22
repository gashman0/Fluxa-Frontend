

export interface MeResponse{
    name: string,
    email: string,
    subscription: {
        plan: string,
        status: string,
    }
}

export interface FluxaProPayload{
    email: string,
    amount: string,
    reference: string,
}