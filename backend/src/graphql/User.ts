import { ModelPost } from '../model/model'
import { TUser } from '../types/types'

export default {
    async postageQuantity({ _id, postageQuantity }: TUser) {
        let int = 0;
        await ModelPost.find({ author_id: _id }, (err, posts) => {
            if (err) throw new Error("Error fetch posts quantity!")
            int = posts.length
        }).catch((err) => {
            throw new Error("Error fetch posts quantity!")
        })
        return postageQuantity = int
    }
}