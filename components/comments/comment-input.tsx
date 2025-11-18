"use client"
import React, { useActionState } from 'react'
import { Input } from '../ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { createComment } from '@/actions/create-comment'

type CommentInputProps = {
    articleId:string;
}

const CommentInput: React.FC<CommentInputProps> = ({articleId}) => {
    const [formState, action, isPending] = useActionState(createComment.bind(null, articleId),{errors:{}});
  return (
    <form action={action} className='mb-8'>
        <div className="flex gap-4">
            <Avatar>
                <AvatarImage src=""/>
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex-1">
                <Input type='text' name='body' placeholder='Add a comment...'/>
                {
                    formState.errors.body && (
                        <p className='text-red-600 text-sm'>{formState.errors.body}</p>
                    )
                }
                <div className="mt-4 flex justify-end">
                    <Button type='submit' disabled={isPending}>{isPending ? "Loading...": "Post comment"}</Button>
                </div>
                {
                    formState.errors.formErrors && (
                        <div className="p-2 border border-red-600 bg-red-100">
                            {formState.errors.formErrors[0]}
                        </div>
                    )
                }
            </div>
        </div>
        
    </form>
  )
}

export default CommentInput
