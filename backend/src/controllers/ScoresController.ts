import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import Score from '../models/Score';

export default {
  async create(request: Request, response: Response): Promise<Response> {
    const { username, score } = request.body;

    const scoreRepository = getRepository(Score);

    const data = {
      username,
      score,
    };

    const schema = Yup.object().shape({
      username: Yup.string().required(),
      score: Yup.number().required(),
    });

    await schema.validate(data, { abortEarly: false });

    const scoreCreated = scoreRepository.create(data);

    await scoreRepository.save(scoreCreated);

    return response.status(201).json(scoreCreated);
  },

  async index(request: Request, response: Response): Promise<Response> {
    const scoreRepository = getRepository(Score);

    const scores = await scoreRepository.find({
      order: {
        score: 'DESC',
        created_at: 'ASC',
      },
    });

    return response.json(scores);
  },
};
