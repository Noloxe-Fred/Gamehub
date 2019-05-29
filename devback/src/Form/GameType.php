<?php

namespace App\Form;

use App\Entity\Game;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\NotNull;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\UrlType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class GameType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class, [
                
                'label' => 'Nom',
                'constraints' => [

                    new NotBlank(),
                    new NotNull(),
                ]
            ])
            ->add('description', TextareaType::class, [

                'required' => false,
            ])
            ->add('score', IntegerType::class, [

                'required' => false,
            ])
            ->add('cover', FileType::class, [

                'required' => false,
            ])
            ->add('illustration', FileType::class, [

                'required' => false,
            ])
            ->add('pegi', IntegerType::class, [

                'required' => false,
            ])
            ->add('website', UrlType::class, [

                'required' => false,
            ])
            ->add('releasedAt', DateType::Class, [

                'required' => false,
                'data' => new \DateTime(),
                'widget' => 'choice',
                'years' => range(date('Y')+20, date('Y')-100),
                'months' => range(date('m'), 12),
                'days' => range(date('d'), 31),
            ])
            ->add('categories')
            ->add('developers')
            ->add('editors')
            ->add('platforms')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Game::class,
        ]);
    }
}
