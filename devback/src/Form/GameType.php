<?php

namespace App\Form;

use App\Entity\Game;
use App\Entity\Editor;
use App\Entity\Category;
use App\Entity\Platform;
use App\Entity\Developer;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Validator\Constraints\NotNull;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\UrlType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
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
                ],
                'attr' => [
                    'class' => 'game-input'
                ]
            ])
            ->add('description', TextareaType::class, [

                'label' => 'Description',
                'required' => false,
                'attr' => [
                    'class' => 'game-input'
                ]
            ])
            ->add('cover', TextType::class, [

                'label' => 'Jaquette',
                'required' => false,
                'attr' => [
                    'class' => 'game-input'
                ]
            ])
            ->add('illustration', TextType::class, [

                'label' => 'Image',
                'required' => false,
                'attr' => [
                    'class' => 'game-input'
                ]
            ])
            ->add('pegi', IntegerType::class, [

                'label' => 'PEGI',
                'required' => false,
                'attr' => [
                    'class' => 'game-input'
                ]
            ])
            ->add('website', UrlType::class, [

                'label' => 'Site web',
                'required' => false,
                'attr' => [
                    'class' => 'game-input'
                ]
            ])
            ->add('releasedAt', DateType::class, [

                'label' => 'Date de sortie',
                'widget' => 'single_text',
                'required' => false,
                'attr' => [
                    'class' => 'game-input'
                ]
            ])
            ->add('categories', EntityType::class, [

                'class' => Category::class,
                'expanded' => false,
                'multiple' => true,
                'label' => 'Catégories',
                'attr' => [
                    'class' => 'game-input'
                ]
            ])
            ->add('developers', EntityType::class, [

                'class' => Developer::class,
                'expanded' => false,
                'multiple' => true,
                'label' => 'Développeurs',
                'attr' => [
                    'class' => 'game-input'
                ]
            ])
            ->add('editors', EntityType::class, [

                'class' => Editor::class,
                'expanded' => false,
                'multiple' => true,
                'label' => 'Editeurs',
                'attr' => [
                    'class' => 'game-input'
                ]
            ])
            ->add('platforms', EntityType::class, [

                'class' => Platform::class,
                'label' => 'Plateformes',
                'expanded' => false,
                'multiple' => true,
                'attr' => [
                    'class' => 'game-input'
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Game::class,
        ]);
    }
}
